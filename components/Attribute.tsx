type Props = {
  className: string
  link: string
}

const Attribute = ({ className, link }: Props) => (
  <span className={className}>
    Challenge from <a className="hover:underline" href={link} target="_blank" rel="noreferrer">Frontend Mentor</a>
  </span>
)

export default Attribute