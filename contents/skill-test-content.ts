import { icons } from "./icons";
export const skillTestContents = {
    skillTest: {
        title: "HyperText Markup Language (HTML)",
        icon: icons.FaHtml5 ,
        description: "Questions: 15 | Time: 30 minutes. Submitted on 12th June 2021, 10:00 AM",
    },
    comparisonGraph: {
        title: "Comparison with others",
        description: "This graph shows how you performed in comparison to others who took the test.",
        icon: "graph",
        data: [
            {
                numberOfStudents: 67,
                score:0,
            },
            {
                numberOfStudents: 30,
                score: 10,
            },
            {
                numberOfStudents: 14,
                score: 20,
            },
            {
                numberOfStudents: 30,
                score: 30,
            },
            {
                numberOfStudents: 25,
                score: 40,
            },
            {
                numberOfStudents: 70,
                score: 50,
            },
            {
                numberOfStudents: 4,
                score: 60,
            },
            {
                numberOfStudents: 10,
                score: 70,
            },
            {
                numberOfStudents: 4,
                score: 80,
            },
            {
                numberOfStudents: 16,
                score: 90,
            },
            {
                numberOfStudents: 12,
                score: 100,
            }
        ]
    },
    syllabusWiseAnalysis: {
        title: "Syllabus wise Analysis",
        data: [
            {
                name: "HTML Tools, Forms, History",
                percent: 80,
            },
            {
                name: "Tags and References in HTML",
                percent: 60,
            },
            {
                name: "Tables and References in HTML",
                percent: 24,
            },
            {
                name: "Tables & CSS Basics",
                percent: 96,
            }
        ]
    },
    questionAnalysis: {
    title: "Question Analysis",
    description: "This section shows the analysis of each question in the test.",
    score: 10,
    totalQuestions: 15,
    },
};
