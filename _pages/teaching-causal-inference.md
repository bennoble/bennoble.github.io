---
title: "Applied Data Analysis"
permalink: /teaching/causal-inference/
classes: syllabus-page
author_profile: false
show_toc: true
file_no: "170"
file_label: "POLI 170A · Summer 2026"
lede: "An applied introduction to causal inference for the social sciences."
---

| | |
|---|---|
| **Instructor** | Benjamin Noble · [b2noble@ucsd.edu](mailto:b2noble@ucsd.edu) |
| **Meetings** | Monday and Wednesday, 11:00am to 1:50pm (fully remote; Zoom link on Canvas) |
| **Office hours** | Monday and Wednesday, 2:00–3:00pm (same Zoom link as class) |

You can come to office hours to ask me questions about the course content (especially if you're having trouble). But you can also come to office hours to say hello, ask me about my research, learn what political scientists do, and tell me about your interests (academic or otherwise). I'd love to meet you.

## Course Description

Does ideological extremism cause a candidate's vote share to increase? Does inflation cause presidential approval to decline? Does democratization cause countries to become more peaceful? These are all *causal* questions. They all take the form: does X *cause* Y?

As social scientists, we often care about causal questions, but it is difficult to answer these questions definitively. Unlike a pharmaceutical company that can randomly assign people to take or not take a drug, we cannot randomly assign ideologies to candidates, inflation to presidents, or democracy to countries (but it would be nice if we could!). Instead, we have to apply creative strategies to try to learn about the world and whether X causes Y with *observational* data. That is, data we observe from the real world (not an experiment).

In this course, we are going to learn about the social science toolkit that will help us analyze data from the real world and, sometimes, draw causal conclusions about whether X causes Y.

A typical session will include a mix of lecture and in-class, hands-on "lab" activities that will give you an opportunity to apply the concepts from lecture. In a typical class, you can expect:

- Lecture on a new statistical/data analysis concept.
- In-class "lab" exercise where you will work individually or in small groups to apply concepts we learned in the lecture.
- Review solutions to the lab exercise, answer questions.

## Required Texts

We'll use two textbooks in this class. Both are available for free online.

- [Causal Inference: The Mixtape](https://mixtape.scunning.com/) (referred to below as "Mixtape") by Scott Cunningham (2021, Yale University Press).
  - *Note: this textbook includes a good deal of mathematical notation. Because this is an* applied *course, our focus is on gaining a conceptual understanding of the math and implementing it with code and data.*
- [Regression and Other Stories](https://users.aalto.fi/~ave/ROS.pdf) (referred to below as "ROS") by Andrew Gelman, Jennifer Hill, and Aki Vehtari (2020, Cambridge University Press).

Some weeks, I will assign political science articles where researchers apply the concept we are learning about in their own research. These should be accessible (for free) if you are connected to the UCSD internet (but let me know if there are issues). Some of these articles can be quite detailed and technical, but do not worry too much. Try to understand the authors' argument and how they use the methodological tools to answer their research question.

Occasionally, I will also assign blog posts that build on the week's content.

## Course Format

This is a fully remote class. All sessions meet over Zoom; the meeting link is posted on Canvas.

Lectures are recorded. I will post recordings to Canvas after class so you can review or catch up if you miss a session. Breakout rooms (where most lab work happens) are not recorded.

Please keep your camera on during class sessions. This is a remote class with a lot of group work and discussion. Seeing each other matters.

If you experience a technical failure during class (your connection drops, Zoom crashes, your Wi-Fi goes out), try to reconnect as soon as you can. If you miss a lab because of a tech issue, that counts toward your one excused lab submission described below. If technical problems become a recurring issue for you, get in touch and we will come up with a plan.

## Assignments

- **Lab assignments (35%).** Group "lab" activities in most sessions, applying that week's lessons. Graded for participation.
- **Problem sets (30%).** Four problem sets combining conceptual Canvas-quiz questions with short coding problems.
- **Final project (35%).** A group data-analysis task in place of a final exam, presented live during the exam period.
{: .ruled-list}

### Lab Assignments (35%)

Most class sessions will include a group "lab" activity, applying the lessons we are learning that week. Lab groups are fixed across the quarter (roughly four students each), and they will also serve as your final project groups (described below).

Although these are group assignments, each member is responsible for submitting their own code and results. Labs are graded for participation: full credit requires attending class with your camera on (per the course format above) and submitting a lab that demonstrates effort. You do not need to finish the entire lab to receive full credit. Solutions will be posted after class so you can check your work.

After lab time, we will review solutions together as a class. During this review, I will call on a few students per session to share their screen and walk us through what their group did. I will rotate through students over the course of the quarter, so everyone should expect to be called on at some point. This is a chance to learn from each other's approaches and to make sure each of you is engaging with the material.

Labs should be submitted on Canvas at the end of the lab period as both the raw .rmd file and the knitted html, matching the workflow you will use for problem sets.

You are expected to attend every class session. Because life happens, you will be allowed one excused class absence with no questions asked; the lab from that day will be dropped from your final grade. You do not need to email me to use this policy; it will be applied automatically when I calculate final grades.

Beyond that one free absence, missing class requires contacting me in advance with a reason. If I grant special dispensation, the lab from that day can be dropped or made up, depending on the situation. Missing class without prior contact will result in a zero on that day's lab, with no make-up. Be thoughtful about how you use the free absence policy; I will not grant additional exceptions for routine reasons.

### Problem Sets (30%)

You will complete four problem sets over the course of the quarter, each covering material from the lectures and in-class labs. Every problem set will combine two components: a set of conceptual questions and one or two short coding problems.

The conceptual portion will be answered via Canvas quiz. It will mix multiple-choice and numeric-answer questions designed to test your conceptual understanding and your ability to interpret statistical output. These questions are intended to be challenging. Expect that you will need to work through problems carefully (often in R) to arrive at the correct answer.

The coding portion will ask you to apply what you have learned to a small piece of data, for example, fitting a regression and interpreting a coefficient, or implementing a DiD estimator. Each code problem must include the code used to arrive at the answer, brief comments in the code explaining what your code is doing and why, and a short interpretation of the result. If you cannot arrive at the correct answer, you can still earn many of the possible points provided you make an attempt, show your work, and explain what you are doing. I will provide a template that will help you fulfill these requirements.

You must work on problem sets on your own. You may use our textbooks, notes, internet, even AI. But you may not consult with other students, tutors, etc. You may discuss your problem sets with me during office hours. Keep in mind that you will be expected to explain your understanding of this material during lab review and during the final presentation Q&A, so it is in your interest to genuinely engage with each problem set rather than outsource it to an LLM.

### Final Project (35%)

In place of a traditional final exam, this course will conclude with a group final project. Your group will work together to complete a timed data analysis task during the final course on Wednesday, July 29. You will present your findings during our final exam period on Friday, July 31.

Your final project grade will be based on three components: the quality of your group's analysis and presentation (the bulk of the grade), a short individual reflection that each group member submits describing their contributions and what they learned, and a confidential peer evaluation completed by each group member, which I may use to adjust individual grades within a group if there is clear evidence of unequal contribution.

You may use AI tools while working on the final project, with the same expectations that apply elsewhere in the course: you should understand the work your group submits and be able to explain and defend the analytical choices during the live presentation and Q&A. Because the project is collaborative and the presentation is live, every member of the group is on the hook for the content.

## Course Policies

### Academic Integrity

I take academic honesty and integrity seriously. You must adhere to the assignment-specific requirements in terms of what you may/may not consult in completing your work. Please see the [UCSD policy on academic integrity](https://senate.ucsd.edu/Operating-Procedures/Senate-Manual/Appendices/2) for more information.

### Use of AI

In this class, I encourage thoughtful use of generative AI tools (such as ChatGPT, Claude, Gemini, etc). These tools are incredibly powerful and can help you with both the statistical and coding concepts taught in this course. However, over-reliance on these tools poses some risk. They can make you *feel* like you understand something more than you do, and while they are less likely to make explicit errors than in the past, they can mislead you if you do not understand the underlying concepts. It is your responsibility to be a careful consumer of these tools and ensure that you validate anything you learn from them. It is also your responsibility, as a student in this course, to understand the answers they provide.

Here are some recommendations:

- If you are having trouble with coding, you should begin by working with one of these AI tools. They are often very good at answering basic coding questions and providing example code that can help you solve your problem. Often, if you copy/paste your error into the chat window, AI can provide a solution. Try this before asking me questions about coding (not because I don't want to help, but because this is how real data analysts solve problems today).
- These tools work best for topics and concepts you "mostly" know. If you are working with an LLM on completely new material and it makes a mistake or misleads you, you will not know or have any intuition that it is wrong. As such, I encourage use of these tools in consultation with material from lectures and the textbooks. Go back and forth between them to master these topics, and verify what you learn from the LLM in our other materials.
- You should be aware that these systems often save your conversation history and use it to train future models. As such, never put any sensitive or private information into a prompt.

### Late Submissions

Late assignments will incur a one letter grade penalty for each 24 hour period they are late. For example, if a problem set is due at 10:59am, a late submission delivered between 11:00am on the due date to 10:59am the following day will automatically lose one letter grade. All solutions will be posted a week after the problem set is due. After solutions have been posted, late assignments cannot be accepted.

### Requests for Re-Grades

If you believe an error has been made, you have one week following the return of the assignment to request a regrade. After this point, re-grades cannot be requested. To do so, please email Professor Noble with a brief explanation of why you are requesting a re-grade as well as evidence from our course materials justifying the request. I reserve the right to refuse to re-grade, and if we do re-grade, please note it may result in a lower grade.

### Communication

For all questions or comments, you may get in touch with me during my office hours listed on this syllabus, or via email. If your email requires a response, you can expect one within 24–48 business hours. If you email me over the weekend, the 24–48 hour clock begins Monday morning.

Note: if you contact me the night before the homework is due, I will likely not respond in time to provide any advice before the deadline. Please plan and work ahead.

### Accommodations

Students needing accommodations for this course due to a disability must provide a current Authorization for Accommodation (AFA) letter issued by the [Office for Students with Disabilities](https://osd.ucsd.edu/). Students are required to discuss accommodation arrangements with instructors, IAs, and OSD liaisons in the department.

Other resources, including the inclusive classroom statement, advising, and resources to support equity, diversity, and inclusion, and more can be found in the Additional Resources section below the reading list.

## Course Schedule and Readings

Based on your learning style, you may find it helpful to complete the readings before or after lecture. Ultimately, it is up to you when you want to do the readings. You can always refer to this living document for the most updated information about the course.

### June 29 · Introduction and R Skills

- Readings:
  - [Does X cause Y? An in-depth evidence review](https://www.cold-takes.com/does-x-cause-y-an-in-depth-evidence-review/) by Holden Karnofsky.
  - Optional (for help with R): [Data Science in R: A Gentle Introduction](https://bookdown.org/jgscott/DSGI/) by James Scott, Chapters 1, 2, and 4.
- **Homework 1 assigned.**

### July 1 · Potential Outcomes

- Readings:
  - Mixtape, Chapter 4 (stop before "4.2 Randomization Inference").

### July 6 · Extraordinary Least Squares

- Readings:
  - ROS, Chapters 6, 7, and 10 (stop before 10.5).

### July 8 · Potential Outcomes (II)

- Readings:
  - ROS, Chapter 18 (skip 18.4–18.5, ignore references to randomized block or group cluster experiments, which we will not cover).

### July 13 · Instrumental Variables

- Readings:
  - ROS, Chapter 21.1–21.2 (pp. 421–432).
  - Mixtape, Chapter 7.1–7.2, 7.3.1, 7.5.
  - White (2019), [Misdemeanor Disenfranchisement? The Demobilizing Effects of Brief Jail Spells on Potential Voters](https://www.cambridge.org/core/journals/american-political-science-review/article/misdemeanor-disenfranchisement-the-demobilizing-effects-of-brief-jail-spells-on-potential-voters/2FEDEE197EA55768312586DA2FEFB8F9), American Political Science Review.
- **Homework 1 due before class, at 10:59am PT.**
- **Homework 2 assigned.**

### July 15 · Instrumental Variables (II)

- No reading.

### July 20 · Regression Discontinuity

- Readings:
  - ROS, 21.3 (pp. 432–440).
  - Mixtape, Chapter 6.1–6.2.3, 6.3.
- **Homework 2 due before class, at 10:59am PT.**
- **Homework 3 assigned.**

### July 22 · Difference-in-Differences

- Readings:
  - Mixtape, Chapter 9 (stop before "9.5 The Importance of Placebos in DD").

### July 27 · Buffer / Synthesis

- No readings.
- **Homework 3 due before class, at 10:59am PT.**

No new content. This session is reserved as a buffer in case we need an extra day on a previous topic.

### July 29 · Final Project Lab

At the start of class, you will receive a dataset and instructions. You will work in your group to complete the analysis. You will have the full three hours of class to complete this work. You will submit your completed analysis at the end of class. There is no separate slide deck to prepare. During the presentation period, your group will screen-share your analysis and walk me through it.

### July 31, 11:30am–2:29pm · Final Project Presentation

Each group will present their final project.

## Grading Scale

| Letter | Range |
|---|---|
| A+ | 96.5% and above |
| A | 93.5% to 96.5% |
| A- | 89.5% to 93.5% |
| B+ | 86.5% to 89.5% |
| B | 83.5% to 86.5% |
| B- | 79.5% to 83.5% |
| C+ | 76.5% to 79.5% |
| C | 73.5% to 76.5% |
| C- | 69.5% to 73.5% |
| D | 59.5% to 69.5% |
| F | Below 59.5% |

## Additional Resources

These additional resources and the language come directly from the UCSD Political Science Department.

### Inclusive Classroom Statement

The IAs and I are fully committed to creating a learning environment that supports diversity of thought, perspectives, experiences, and identities. We urge each of you to contribute your unique perspectives to discussions of course questions, themes, and materials so that we can learn from them, and from each other. If you should ever feel excluded, or unable to fully participate in our class for any reason, please let me know, or please consult the Department's [Report an Issue](https://polisci.ucsd.edu/contact/report-an-issue.html#UC-San-Diego-Principles-of-Comm) page for additional campus resources to support you, and diversity, equity, and inclusion in our classroom, and beyond.

Additional resources to support equity, diversity, and inclusion in our classroom, and beyond, may be found here:

- <https://diversity.ucsd.edu/>
- <https://students.ucsd.edu/student-life/diversity/index.html>
- <https://regents.universityofcalifornia.edu/governance/policies/4400.html>

### Resources to Support Student Learning

- Library Help, eReserves and research tools: <https://library.ucsd.edu/ask-us/triton-ed.html>
- Writing Hub: <https://commons.ucsd.edu/students/writing/index.html>
- Supplemental Instruction: <https://aah.ucsd.edu/supplemental-instruction-study-group/index.html>
- Tutoring: <https://aah.ucsd.edu/content-tutoring/index.html>
- Mental Health Services: <https://caps.ucsd.edu>
- Community Centers: learn about the different ways UC San Diego explores, supports, and celebrates the many cultures that make up our diverse community: <https://students.ucsd.edu/student-life/diversity/index.html>

### Academic Advising

Students who have academic advising questions related to the Political Science major should contact the department's Undergraduate Advisor, Zain Sharifi, via the Virtual Advising Center. Academic advising questions often include (but are not limited to): add/drop deadlines, course enrollment policies, planning major and minor requirements, quarter-by-quarter plans, department petitions and paperwork, and referrals to campus and student support services.

### Equity, Diversity, and Inclusion Offices

**Office of Equity, Diversity, and Inclusion.** 858.822.3542 · diversity@ucsd.edu · <https://diversity.ucsd.edu/>

**Office for the Prevention of Harassment and Discrimination.** <https://ophd.ucsd.edu/> · ophd@ucsd.edu · (858) 534-8298

**UCSD Office of the Ombuds.** <https://ombuds.ucsd.edu/> · To reach a Confidential Ombudsperson, please call 858-534-0777.

### UCSD's Principles of Community

To foster the best possible working and learning environment, UC San Diego strives to maintain a climate of fairness, cooperation, and professionalism. These principles of community are vital to the success of the University and the well being of its constituents. UC San Diego faculty, staff, and students are expected to practice these basic principles as individuals and in groups. The [Principles of Community](https://ucsd.edu/about/principles.html) and the [Student Code of Conduct](https://students.ucsd.edu/_files/student-conduct/ucsandiego-student-conduct-code_interim-revisions1-16-18.pdf) support equity, diversity, and inclusion in our classroom.

## Acknowledgements

I thank Pamela Ban, Christopher Lucas, and Tiago Ventura for inspiration. I also thank Christopher Lucas for providing some of the materials that were used in this course.
