
import './App.css'
import Card from './Components/Card'

// function App() {

//   return (
//     <>
//      {/* <Card name="Rakesh Kumar" place ="Chennai" role="Web Designer" image="https://i.pinimg.com/originals/7b/a5/3e/7ba53e7463b4afd2c728f9beb59b65ac.jpg" status={true} skills={['UI/UX','Web Designing','Front-End','Web Development']}/> */}
//     </>
//   )
// }

// export default App

const data = [
  {
      name: "Yugen",
      place: "Chennai, TN",
      role: "Web Designer",
      image: "https://cdn-icons-png.flaticon.com/512/5325/5325447.png",
      status: true,
      skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX Design"]
  },
  {
      name: "Barath",
      place: "Chennai, TN",
      role: "Web Developer",
      image: "https://cdn-icons-png.flaticon.com/512/5325/5325447.png",
      status: false,
      skills: ["Python", "Django", "JavaScript", "React", "Node.js"]
  },
  {
      name: "Rakesh Kumar",
      place: "Chennai, TN",
      role: "React Developer",
      image: "https://cdn-icons-png.flaticon.com/512/5325/5325447.png",
      status: true,
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "React"]
  },
  {
      name: "Karthick",
      place: "Chennai, TN",
      role: "Frontend Developer",
      image: "https://cdn-icons-png.flaticon.com/512/5325/5325447.png",
      status: true,
      skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Angular"]
  },
  {
      name: "Somu",
      place: "Chennai, TN",
      role: "Full Stack Developer",
      image: "https://cdn-icons-png.flaticon.com/512/5325/5325447.png",
      status: true,
      skills: ["Ruby on Rails", "JavaScript", "React", "PostgreSQL", "AWS"]
  }
];


function App() {
    return (
        <>
            {data.map((person, index) => (
                <Card
                    key={index}
                    name={person.name}
                    place={person.place}
                    role={person.role}
                    image={person.image}
                    status={person.status}
                    skills={person.skills}
                />
            ))}
        </>
    );
}

export default App;
