"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'

interface CommentFormProps {
  movieId: number
}

export function CommentForm({ movieId }: CommentFormProps) {
  const [comment, setComment] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3001/api/sentiment', { comment });

      const predictions = response.data.predictions[0].values;
      const labels = ["negative", "neutral", "positive"];
      const probabilities = predictions[0];
      const highestIndex = probabilities.indexOf(Math.max(...probabilities));
      const highestLabel = labels[highestIndex];

      toast({
        title: "Comment added",
        description: 
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
          Sentiment: {highestLabel}
          </code>
        </pre>,
      });
    } catch (error) {
      console.error("Error fetching sentiment analysis:", error);
      toast({
        title: "Error",
        description: 
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">Error: {String(error)}</code>
        </pre>,
      });
    }

    setComment("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add your comment..."
        className="mb-2"
      />
      <Button type="submit">Submit Comment</Button>
    </form>
  )
}

