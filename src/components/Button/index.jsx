function Button (props) {
    const { title, changeCount } = props

    return (
        <button onClick={changeCount} className="mx-10 bg-indigo-500 p-2 rounded-lg text-lg text-white shadow-md">
            {title}
        </button>
    )
}

export default Button