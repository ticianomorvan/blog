type TitleType = {
  text: string,
}

const Title = ({ text }: TitleType) => (
  <h1 className='mt-6 text-4xl font-bold text-center'>{text}</h1>
)

export default Title;