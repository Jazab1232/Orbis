import { Button } from "../ui/button"


export interface ButtonProps {
    icon?: React.ReactNode,
    label: string,
    width?: string,
    height?: string,
    backgroundColor?: string,
    onClick?: () => void
}

function ButtonPrimary({ icon, label, width, height, backgroundColor, onClick }: ButtonProps) {
    return (
        <Button
            onClick={onClick}
            className={`px-3 ${height ? height : "h-[40px]"} flex items-center justify-center ${backgroundColor ? backgroundColor : "bg-primary"} cursor-pointer rounded-[8px] text-white hover:opacity-90 transition-opacity ${width ? width : ""}`}>
            {icon && icon}
            <span>{label}</span>
        </Button>

    )
}

export default ButtonPrimary