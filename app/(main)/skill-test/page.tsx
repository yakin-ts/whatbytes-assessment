"use client";

import React from 'react'
import { skillTestContents } from "@/contents/skill-test-content"
import SkillTestComponent from "./_components/skill-test"
import SyllabusAnalysis from "./_components/syllabus-wise-analysis"
import QuickStatistics from "./_components/quick-statistics"
import ComparisonGraph from "./_components/comparison-graph";
import QuestionAnalysis from "./_components/question-analysis";
import { useStore } from "@/hooks/useStore";

const SkillTest = () => {
  const { score, numberOfQuestions} = useStore();
  return (
    <div className="w-full px-8 pt-8">
      <h1 className="text-left">Skill Test</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
        {/* the first column should have col span of  2*/}
        <div className="col-span-2 md:col-span-3 flex flex-col gap-y-6">
          <SkillTestComponent {...skillTestContents.skillTest} />
          <QuickStatistics />
          <ComparisonGraph studentPercentage={score} />
        </div>
        <div className="col-span-2 flex flex-col gap-y-5">
          <SyllabusAnalysis {...skillTestContents.syllabusWiseAnalysis} />
          <QuestionAnalysis numberOfQuestions={numberOfQuestions} />
        </div>
      </div>
    </div>
  )
}

export default SkillTest
