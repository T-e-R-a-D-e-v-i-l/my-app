const Student = (props) => {
    const { student, deleteStudent } = props
    return(
        <div className="bg-indigo-50 m-10 px-8 py-4 rounded-md shadow-md flex justify-between">
            <div className="flex flex-col item-start">
                <p className="text-2xl font-bold">{student.firstName} {student.lastName}</p>
                <p>Возраст: {student.age}</p>
                <p className="bg-indigo-200 text-indigo-800 font-semibold rounded-full px-3 py-1 shadow">Курс: {student.cours}</p>
            </div>
            <button className="hover:underline cursor-pointer" onClick={() => deleteStudent(student.id)}>Удалить</button>
        </div>
    )
}

export default Student