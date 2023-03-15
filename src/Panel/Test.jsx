import Render from "../Components/React/Render"

const Test = () => {
    const first = <>hi</>
    const second = <div>hi</div>
    const third = <>
        <div>hi</div>
    </>
    const fourth = <div>
        <div>hi</div>
        <div>bye</div>
    </div>

    console.log(first, second, third, fourth)
    return <div dir='ltr'>
        <Render />
    </div>
}

export default Test
