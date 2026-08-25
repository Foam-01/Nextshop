const  Hello = (props: {name: string, age?: number}) => {
    return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
    </div>
    )
}

export default Hello;