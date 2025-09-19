"use client"

import { motion } from "framer-motion"
import GitHubCalendar from "react-github-calendar"
import { Tooltip as ReactTooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"

export default function GitHubActivity() {
  const selectLastHalfYear = (contributions: any) => {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const shownMonths = 6

    return contributions.filter((activity: any) => {
      const date = new Date(activity.date)
      const monthOfDay = date.getMonth()

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      )
    })
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            GitHub Activity
          </h2>

          <div className="bg-card border rounded-lg p-8 flex justify-center overflow-x-auto">
            <GitHubCalendar
              username="teacherOP"
              blockSize={14}
              blockMargin={5}
              fontSize={14}
              transformData={selectLastHalfYear}
              colorScheme="light"
              theme={{
                light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#384259", "#073042"]
              }}
            />
            <ReactTooltip id="react-tooltip" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}