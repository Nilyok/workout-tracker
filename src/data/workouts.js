
const workouts = {
  "Monday": [
    { name: "Barbell Bench Press", sets: 4, reps: "8–10", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=rT7DgCr-3pg" },
    { name: "Dumbbell Shoulder Press", sets: 4, reps: "10", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=B-aVuyhvLHU" },
    { name: "Incline Dumbbell Fly", sets: 3, reps: "10–12", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=eozdVDA78K0" },
    { name: "Lateral Raises", sets: 4, reps: "15", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=kDqklk1ZESo" },
    { name: "Triceps Rope Pushdown", sets: 3, reps: "12–15", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=vB5OHsJ3EME" },
    { name: "Overhead Dumbbell Extension", sets: 3, reps: "12", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=nRiJVZDpdL0" },
    { name: "Cardio – Incline Walk 🚶‍♂️", sets: "", reps: "5 min", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Vf0rP3QZpE8" },
  ],
  "Tuesday": [
    { name: "Pull-Ups / Lat Pulldown", sets: 4, reps: "8–12", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc" },
    { name: "Barbell Row", sets: 4, reps: "8–10", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=FWJR5Ve8bnQ" },
    { name: "Seated Cable Row", sets: 3, reps: "10", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f74" },
    { name: "Dumbbell Shrugs", sets: 3, reps: "12–15", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=mSHHc-3zJdE" },
    { name: "Dumbbell Bicep Curls", sets: 4, reps: "10–12", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
    { name: "Hammer Curls", sets: 3, reps: "12", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=zC3nLlEvin4" },
    { name: "Cardio – Rower 🚣‍♂️", sets: "", reps: "10 min", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=sP4FwB17KcQ" },
  ],
  "Wednesday": [
    { name: "Barbell Squat / Leg Press", sets: 4, reps: "8–10", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Dy28eq2PjcM" },
    { name: "Romanian Deadlift", sets: 3, reps: "10", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=DJpYXlWaInw" },
    { name: "Walking Lunges", sets: 3, reps: "20 (10/leg)", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=D7KaRcUTQeE" },
    { name: "Leg Curl Machine", sets: 3, reps: "12", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=1Tq3QdYUuHs" },
    { name: "Calf Raises", sets: 4, reps: "15–20", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=YMmgqO8Jo-k" },
    { name: "Plank + Leg Lift", sets: 3, reps: "30–45 sec", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Yyji9ZyeaC4" },
    { name: "Cable Crunch", sets: 3, reps: "15–20", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=9bRj9QJskI0" },
    { name: "Cardio – Jog 🏃‍♂️", sets: "", reps: "5 min", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Fv6e-BqpU7M" },
  ],
  "Thursday": [
    { name: "Seated Arnold Press", sets: 4, reps: "10", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=vj2w851ZHRM" },
    { name: "Lateral Raise + Front Raise", sets: 3, reps: "12 each", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=3VcKaXpzqRo" },
    { name: "Close-Grip Bench Press", sets: 3, reps: "10", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=wjUmnZH528Y" },
    { name: "Preacher Curl", sets: 4, reps: "10", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=fIWP-FRFNU0" },
    { name: "Dumbbell Triceps Kickback", sets: 3, reps: "12", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=vB5OHsJ3EME" },
    { name: "Cable Face Pulls", sets: 3, reps: "15", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=rep-qVOkqgk" },
    { name: "HIIT – Sprints ⚡", sets: "", reps: "5 min", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=ml6cT4AZdqI" },
  ],
  "Friday": [
    { name: "Deadlift", sets: 4, reps: "6–8", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=op9kVnSso6Q" },
    { name: "Incline Dumbbell Press", sets: 3, reps: "10", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=8iPEnn-ltC8" },
    { name: "Pull-Ups / Lat Pulldown", sets: 3, reps: "10", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc" },
    { name: "Goblet Squat", sets: 3, reps: "12", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=6xwYhXyGzW0" },
    { name: "Dips", sets: 3, reps: "Max", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=2z8JmcrW-As" },
    { name: "Cable Crossover", sets: 3, reps: "12–15", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=tKjcgfu44sI" },
    { name: "Hanging Leg Raises", sets: 3, reps: "15", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=JB2oyawG9KI" },
    { name: "Cardio – Incline Walk 🏔️", sets: "", reps: "10 min", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Vf0rP3QZpE8" },
  ]
}
export default workouts
