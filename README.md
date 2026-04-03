# GhostFollow
> Find the ghosts in your following list.

[🔗 Open Hosted Website](https://ghost-follow.vercel.app/)

![Status](https://img.shields.io/badge/status-personal--project-blue)
![Tech](https://img.shields.io/badge/tech-vanilla--js-yellow)
![Privacy](https://img.shields.io/badge/data-local-green)

A minimal tool that parses your Instagram data export and tells you who doesn’t follow you back.

No accounts. No APIs. No tracking.  
Just your data. Processed locally.

---

## ✨ What It Does

* Accepts Instagram `.zip` data export
* Extracts followers & following
* Compares both lists efficiently
* Outputs users who don’t follow you back
* Provides direct profile links
* Runs entirely in-browser

---

## ⚙️ How It Works

The logic is straightforward but reliable:

* Reads ZIP using `JSZip`
* Locates:

  * `followers_1.json`
  * `following.json`
* Converts follower usernames into a `Set`
* Iterates through following list
* Flags users not present in the follower set

Everything runs client-side.

---

## 📥 Instagram Data Download

> *(I’ll later fill this section with screenshots and proper steps)*

<!-- Image placeholders -->

![Step 1]()
![Step 2]()
![Step 3]()
![Step 4]()
![Step 5]()
![Step 6]()
![Step 7]()

---

## 💭 Why I Built This

I built this out of pure necessity back in school. I don’t remember exactly when, but it was somewhere around 9th or 10th grade — peak COVID era.

At that time, I had this *very important habit* of checking who I follow that doesn’t follow me back. Priorities, obviously.

I used to rely on random third-party apps where I’d log in with my Instagram account (questionable decision-making, in hindsight). Then suddenly, a bunch of my friends started getting their accounts hacked.

That was enough for me to panic and turn on 2FA.

Great decision… except it completely broke all those third-party apps.

So now I had:

* security ✅
* peace of mind ❌ (because I still needed to know who wasn’t following me back)

And for some reason, I *really* needed to know. It genuinely bothered me back then.
(yeah… looking back, it’s a little cringe, but it was serious business at the time)

So I did the only logical thing:

I built my own tool.

## How I Built This

Now here’s the funny part —
I didn’t actually *know* web development.

I basically made this entire thing using ChatGPT.

Like… fully.

Did I write the code? No.
Did I understand the code? Also no (initially).

So yeah, you could say this was a **vibe-coded project before vibe coding was even a thing**.

But it wasn’t completely effortless. I still had to:

* figure out how Instagram’s export files were structured
* tweak the logic manually
* fix whatever ChatGPT confidently got wrong (which was… a lot, back then)

Because this was early ChatGPT era — it wasn’t the smartest tool yet.

But somehow, I got it working.

And that was actually my entry point into web development.

So yeah — this project is:

* slightly unnecessary
* mildly embarrassing in origin
* technically my first web project

…but also kinda important to me.


---

## 🛠️ Running Locally

```bash
git clone https://github.com/itsloki-dev/GhostFollow.git
cd GhostFollow
```

Open `index.html` directly, just click on the `index.html` file to open it in browser.
OR 
Run a local server:
```bash
python -m http.server
```
Then open http://localhost:8000/ in your browser.
> Port defaults to 8000, but may change if it's already in use.

---

## 📁 Structure

```
.
├── index.html
├── style.css
└── main.js
```

---

## 🧠 Notes

* Works only with official Instagram exports
* Requires correct folder structure inside ZIP
* No external storage or backend
* Profile images are placeholders
