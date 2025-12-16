
import Button from '../ui/button'

export interface ButtonProps {
    icon?: React.ReactNode,
    label: string,
    width?: string,
    onClick?: () => void
}

function ButtonPrimary({ icon, label, width, onClick }: ButtonProps) {
    return (
        <Button
            onClick={onClick}
            className={`px-3 h-[40px] flex items-center justify-center bg-primary hover:bg-primary/90 cursor-pointer rounded-[8px] text-white ${width ? width : ""}`}>
            {icon}
            <span>{label}</span>
        </Button>

    )
}

export default ButtonPrimary