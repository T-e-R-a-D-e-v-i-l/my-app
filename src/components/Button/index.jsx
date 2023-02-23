function Button (props) {
    const { title, changeCount } = props

    return (
        <button onClick={changeCount} className="mx-10 p-2 border border-solid border-color-white rounded-lg text-lg text-white shadow-md">
            {title}
        </button>
    )
}

export default Button