interface IStartSteps {
  number: number
  text: string
}

const StartSteps: React.FC<IStartSteps> = ({ number, text }: IStartSteps): JSX.Element => {
  return (
    <div className={`flex flex-row items-center justify-center`}>
      <div className={`flex h-[70px] w-[70px] items-center justify-center rounded-[24px] bg-[#323f5d]`}>
        <p className={`text-[20px] font-bold text-white`}>{number < 10 ? `0${number}` : number}</p>
      </div>
      <p className={`ml-[30px] flex-1 text-[18px] font-normal leading-[32px] text-[#b0b0b0]`}>{text}</p>
    </div>
  )
}

export default StartSteps
