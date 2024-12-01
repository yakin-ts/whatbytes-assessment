import { create } from 'zustand'

interface State {
  rank: number
  score: number
  numberOfQuestions: number
  lineGraphData: { name: number, numberOfStudents: number }[]
  setRank: (rank: number) => void
  setScore: (score: number) => void
  setNumberOfQuestions: (numberOfQuestions: number) => void
  setLineGraphData: (data: { name: number, numberOfStudents: number }[]) => void
}

interface LineGraphData {
  name: number
  numberOfStudents: number
}

interface State {
  rank: number
  score: number
  numberOfQuestions: number
  lineGraphData: LineGraphData[]
  setRank: (rank: number) => void
  setScore: (score: number) => void
  setNumberOfQuestions: (numberOfQuestions: number) => void
  setLineGraphData: (data: LineGraphData[]) => void
}

export const useStore = create<State>((set: (partial: Partial<State>) => void) => ({
  rank: 1,
  score: 30,
  numberOfQuestions: 8,
  lineGraphData: [],
  setRank: (rank: number) => set({ rank }),
  setScore: (score: number) => set({ score }),
  setNumberOfQuestions: (numberOfQuestions: number) => set({ numberOfQuestions }),
  setLineGraphData: (data: LineGraphData[]) => set({ lineGraphData: data }),
}))