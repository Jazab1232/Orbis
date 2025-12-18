
import { Button } from '../ui/button'
import { ButtonProps } from './ButtonPrimary'

function ButtonSecondary({ icon, label, width, onClick }: ButtonProps) {
    return (
        <Button
            onClick={onClick}
            className={`px-3 h-[40px] flex items-center justify-center bg-gray-400 hover:bg-gray-400/80 cursor-pointer rounded-[8px] text-white ${width ? width : ""}`}>
            {icon && icon}
            <span>{label}</span>
        </Button>

    )
}

export default ButtonSecondary