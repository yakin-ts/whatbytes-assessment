"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"

import { useStore } from "@/hooks/useStore"
import { FaHtml5 } from "react-icons/fa"
import { MoveRight } from "lucide-react"

const FormSchema = z.object({
  rank: z.coerce.number().min(1, "Rank must be greater than 0"),
  score: z.coerce.number().min(1, "Score must be greater than or equal to 0").max(100, "Score must be less than or equal to 100"),
  numberOfQuestions: z.coerce.number().min(1, "Number of questions must be greater than or equal to 0").max(15, "Number of questions must be less than or equal to 15"),
})

export function UpdateDialog() {
  const { rank, score, numberOfQuestions, setRank, setScore, setNumberOfQuestions } = useStore()
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      rank,
      score,
      numberOfQuestions,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setRank(data.rank)
    setScore(data.score)
    setNumberOfQuestions(data.numberOfQuestions)
    //close dialog after submitting
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Update</Button>
      </DialogTrigger>
      <DialogContent className="flex">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col p-6 space-y-6">
            <div className="flex justify-between space-x-6">
              <h1 className="text-xl font-bold text-black">Update Scores</h1>
              <FaHtml5 className="text-2xl text-orange-500" />
            </div>
            <div className="flex space-x-6 justify-between items-center">
              <div className="flex justify-start items-center space-x-2 text-xs">
                <span className="flex justify-center items-center h-5 w-5 bg-primary rounded-full text-white">1</span>
                <span className="">Update your <b className="text-black">Rank</b></span>
              </div>
              <FormField
                control={form.control}
                name="rank"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="number" placeholder="Rank" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex space-x-6 justify-between items-center">
              <div className="flex space-x-2 justify-start items-center text-xs">
                <span className="flex justify-center items-center h-5 w-5 bg-primary rounded-full text-white">2</span>
                <span className="">Update your <b className="text-black">Score</b></span>
              </div>
              <FormField
                control={form.control}
                name="score"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="number" placeholder="Score" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex space-x-6 justify-between items-center">
              <div className="flex space-x-2 justify-start items-center text-xs">
                <span className="flex justify-center items-center h-5 w-5 bg-primary rounded-full text-white">3</span>
                <span className="">Update your <b className="text-black">Number of Questions</b></span>
              </div>
              <FormField
                control={form.control}
                name="numberOfQuestions"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="number" placeholder="Number of Questions" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end gap-x-4">
              <Button type="button" variant={"outline"} onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button type="submit">Save <MoveRight/></Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}