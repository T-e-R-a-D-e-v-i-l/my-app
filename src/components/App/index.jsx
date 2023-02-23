import Header from "components/Heder";
import { useState } from "react";
import Student from "components/student";
import Footer from "components/Footer";
 
function App() {
  const [students, setStudents] = useState([
    {
        id:1,
        firstName: "Анна",
        lastName: "Иванова",
        age: "12",
        cours:"рисование"
    },
    {
        id:2,
        firstName: "Ирина",
        lastName: "Сергеева",
        age: "20",
        cours:"вокал"
    },
    {
        id:3,
        firstName: "Дмитрий",
        lastName: "Фадеев",
        age: "40",
        cours:"программирование"
    },
    {
        id:4,
        firstName: "Сергей",
        lastName: "Ткачев",
        age: "32",
        cours:"танцы"
       },
])
    const deleteStudent = (id) => {
        const filteredStudents = students.filter(student => student.id !== id)
        setStudents(filteredStudents)    
    }
  return (
        <div>
            <Header />
            <div className="max-w-screen-lg mx-auto mx-10 min-h-screen">
                {students.length === 0 && (
                    <div className="mt-20 text-center text-7xl text-gray-500 font-thin">Нет студентов</div>
                )}
                {students.length > 0 && students.map((student) => { 
                    return (
                        <Student key={student.id} student={student} deleteStudent={deleteStudent}/>
                    )
                })}
            </div>
            <Footer />
        </div>
    );
}

export default App;
