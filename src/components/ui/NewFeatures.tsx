import Image from 'next/image'

interface INewFeatures {
  imgUrl: string
  title: string
  subtitle: string
}

const NewFeatures: React.FC<INewFeatures> = ({ imgUrl, title, subtitle }: INewFeatures): JSX.Element => {
  return (
    <div className={`flex min-w-[210px] flex-1 flex-col sm:max-w-[250px]`}>
      <div className={`flex h-[70px] w-[70px] items-center justify-center rounded-[24px] bg-[#323f5d]`}>
        <Image className={`h-1/2 w-1/2 object-contain`} src={imgUrl} alt={title} width={30} height={30} />
      </div>
      <h3 className={`mt-[26px] text-[24px] font-bold leading-[30px] text-white`}>{title}</h3>
      <p className={`mt-[16px] flex-1 text-[18px] font-normal leading-[24px] text-[#b0b0b0]`}>{subtitle}</p>
    </div>
  )
}

export default NewFeatures
