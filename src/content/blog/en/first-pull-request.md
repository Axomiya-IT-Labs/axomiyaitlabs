---
lang: "en"
title: "Your first pull request: a step-by-step walkthrough."
excerpt: "From forking a repo to getting merged — beginner friendly."
date: "2026-07-05"
cat: "tutorial"
catLabel: "Tutorial"
readTime: "10 min read"
image: "/assets/blog/first-pull-request.png"
---

Making your first pull request feels like climbing a mountain — until you actually do it. This tutorial walks you through every single step, from creating a GitHub account to hitting the Merge button. We will keep it simple, practical, and beginner-friendly.

## What is Git and GitHub?

Git is a version control system — it tracks changes in your code over time. Think of it like saving different versions of a document, but for code. GitHub is a website where developers store their Git repositories online and collaborate with others. When you contribute to a project on GitHub, you do this through a pull request.

## Step 1: Create a GitHub account

If you do not have a GitHub account, go to github.com and sign up. Choose a username you are comfortable sharing publicly — this will be part of your developer identity. Use your real name or a recognizable handle so people know who you are.

## Step 2: Fork the repository

Find the repository you want to contribute to — for example, one of the Axomiya IT Labs projects. Click the Fork button in the top right corner. This creates a copy of the project in your own GitHub account. You can now make changes to your copy without affecting the original.

## Step 3: Clone the repository to your computer

Open your terminal and run:
git clone https://github.com/YOUR-USERNAME/PROJECT-NAME.git

Replace YOUR-USERNAME with your GitHub username and PROJECT-NAME with the repository name. This downloads the code to your computer.

## Step 4: Create a new branch

Never make changes directly to the main branch. Create a new branch instead:
git checkout -b my-first-contribution

This creates a new branch called my-first-contribution and switches to it. You can name it anything descriptive — like fix-typo, add-translation, or update-readme.

## Step 5: Make your changes

Open the project folder in your code editor. Make a small, focused change — fix a typo, add a translation, improve a sentence, or update documentation. Keep it simple for your first contribution. The smaller the change, the easier it is for maintainers to review and merge.

## Step 6: Stage and commit your changes

In your terminal, run:
git add .
git commit -m "Add my first contribution"

The first command stages all your changes. The second commits them with a message describing what you did. Write clear commit messages — they help maintainers understand your changes.

## Step 7: Push your branch to GitHub

git push origin my-first-contribution

This uploads your branch to your forked repository on GitHub.

## Step 8: Open a pull request

Go to your forked repository on GitHub. You will see a banner suggesting you to open a pull request. Click it, write a clear title and description explaining what you changed and why, then submit. The maintainers will review your work and may ask for changes. Once approved, they will merge your contribution into the main project.

## Common mistakes beginners make

- Forgetting to pull the latest changes before starting
- Pushing directly to main instead of creating a branch
- Writing vague PR descriptions like "fixed stuff"
- Making too many changes in one PR — keep it focused
- Getting discouraged if maintainers ask for revisions — that is normal

## What happens after you submit

A maintainer will review your pull request. They might say looks good, merge it, or ask you to make changes. If they ask for changes, do not take it personally — it is part of the process. Every contributor, even experienced ones, goes through review cycles.

Once your PR is merged, congratulations — you are now an open-source contributor! You can add this to your resume, share it on LinkedIn, and feel proud of your achievement.

## Using AI to help

AI tools like GitHub Copilot or ChatGPT can help you understand code, write commit messages, or debug errors. But always review AI-generated code carefully before submitting. The goal is to learn, not to automate your way through contributions.
