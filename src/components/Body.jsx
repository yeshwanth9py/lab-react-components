
export function Body(props) {
    console.log(props)
    let imageData = props.silu
    return (
        <div>
            {
                imageData.map(image => {
                    return (
                        <div key={image.id} className="column">
                            <img src={image.img} alt=""></img>
                        </div>
                    )
                })
            }
        </div>
    )
}

