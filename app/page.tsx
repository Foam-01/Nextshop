import Hello from "./Hello";


const HomePage = () => {
  return (
  <div>
    <Hello name="John" age = {20} />
    <Hello name="kob" age = {25} />
    <Hello name="New" />

  </div>
  )
};

export default HomePage;