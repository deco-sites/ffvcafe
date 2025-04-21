export interface Props {
  /**
  * @description Text.
  */
  text: string;
}

export default function Section({
  text = "text"
}: Props) {
  return <div class="flex w-full xl:container xl:mx-auto mx-5 md:mx-10 z-10 flex-col gap-12 md:gap-20 items-start">
    <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
      {text}
    </p>
  </div>
}