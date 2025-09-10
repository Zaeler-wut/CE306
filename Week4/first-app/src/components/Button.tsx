interface ButtonProps {
    label?: string;
    onClick: () =>void;
    theme?: 'primary' | 'secondary';
}

const Button = ({
    label = "คลิก",
    onClick,
    theme = "primary",
}:ButtonProps) => {
    const style = theme === 'primary' ? {backgroundColor: 'blue', color:'white'} : {backgroundColor: 'gray'};
    return <button onClick={onClick} style={style}>{label}</button>
}