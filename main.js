async function processZip() {
    const fileInput = document.getElementById("zipInput");
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = '';

    if (fileInput.files.length === 0) {
        alert("Please upload a ZIP file.");
        return;
    }

    const file = fileInput.files[0];
    const zip = await JSZip.loadAsync(file);

    try {
        let followersFile = null;
        let followingFile = null;

        zip.forEach((relativePath, zipEntry) => {
            if (relativePath.endsWith("followers_and_following/followers_1.json")) {
                followersFile = zipEntry;
            }
            if (relativePath.endsWith("followers_and_following/following.json")) {
                followingFile = zipEntry;
            }
        });

        if (!followersFile || !followingFile) {
            resultsDiv.textContent = "Could not find followers/following JSON files in the ZIP. Make sure you uploaded the correct Instagram data export.";
            return;
        }

        const followersData = await followersFile.async("string");
        const followingData = await followingFile.async("string");

        const followers = JSON.parse(followersData);
        const followingDataParsed = JSON.parse(followingData);

        const following = Array.isArray(followingDataParsed)
            ? followingDataParsed
            : followingDataParsed["relationships_following"];

        const followerValues = new Set(
            followers.map(obj => obj.string_list_data[0].value)
        );

        let unfollowerCount = 0;

        following.forEach(obj => {
            const username =
                obj.title ||
                (obj.string_list_data?.[0]?.value) ||
                (obj.string_list_data?.[0]?.href?.split("/").filter(Boolean).pop());

            if (!username) return;

            if (!followerValues.has(username)) {
                unfollowerCount++;

                const listItem = document.createElement("div");
                listItem.classList.add("user-item");

                // Profile pic URL is not available in export data; using a placeholder
                const profilePic = document.createElement("img");
                profilePic.src = 'https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png';
                profilePic.alt = `${username}'s profile picture`;
                profilePic.classList.add("profile-pic");

                const userName = document.createElement("a");
                userName.href = `https://www.instagram.com/${username}/`;
                userName.textContent = username;

                const followBackText = document.createElement("span");
                followBackText.textContent = " is ghosting you.";

                listItem.appendChild(profilePic);
                listItem.appendChild(userName);
                listItem.appendChild(followBackText);

                resultsDiv.appendChild(listItem);
            }
        });

        if (unfollowerCount === 0) {
            resultsDiv.innerHTML = "<p>Everyone you follow follows you back! 🎉</p>";
        } else {
            const summary = document.createElement("p");
            summary.textContent = `${unfollowerCount} account${unfollowerCount > 1 ? "s" : ""} you follow don't follow you back:`;
            resultsDiv.insertBefore(summary, resultsDiv.firstChild);
        }

    } catch (error) {
        resultsDiv.textContent = "Error processing the ZIP file: " + error;
    }
}

document.getElementById("zipInput").addEventListener("change", processZip);

document.getElementById("themeSwitcher").addEventListener("change", function () {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
});
