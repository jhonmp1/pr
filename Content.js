import Part from './Part.js'

const Content = (props) => {
    return(
       <div>
        {
            props.parts.map((partes, index) => {
                return(
                    <Part parte={partes.name} ejercicios={partes.exercises}></Part>
                );
            })
        }
       </div>
    )
}

export default Content

