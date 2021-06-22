const Total = (props) => {
    let sumaexercises=0;
    return(
        <div>
        {
            props.parts.map((partes, index) => {
                sumaexercises+=partes.exercises
        })
    }
    <p>Number of exercises {sumaexercises}</p>
    </div>
    )
}

export default Total