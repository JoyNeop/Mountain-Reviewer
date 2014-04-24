# Zhihu Typo Fixer Bot — Mountain Reviewer

## Short short ago...

Apr 23, 2014, [Joy Neop] (http://www.zhihu.com/people/joyneop) added a [question] (http://www.zhihu.com/question/23519019) on Zhihu, "Should Zhihu require a user to input reCAPCHA when he/she wants to submit text containing typo?"

## Purpose

This is a bot to fix typos in questions on Zhihu.

## Hot it works

1. In a given topic, it gets a collection of questions which contains given keywords.
2. The collection will be foreached. With RegExp, it filters out correct questions to remain the ones with typo.
3. It pretends to be a human with a browser and fix typos in questions which are given form step 2.

### Auto update

Every day it is launched the first time, it retrieves a new version of fixing rules, if we publish one, from GitHub and use it to do its job.

### Multithreads

To balance the risk of IP being banned by Zhihu's anti-abuse algorithm, and the speed to fight against typos, it runs multithreads. Actually, I mean, its work is divided into 100 parts. Say I am responsible for running thread `#1`, `#36` and `#100`, the bot running on my device will only fix questions whose ID ends with `01`, `36` and `00`.

## Let's start writing this program

Ok, it may need Python, Node.js and Node-WebKit, but I know neither. Join this repo, the fame belongs to you.

## License

All versions, both existing and future, respectively, were and will be released under GPLv2.

## Credits

- Joy Neop — Nothing other than simply adding the question.