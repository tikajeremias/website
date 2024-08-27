type TextProps = {
    variant?: 'default' | 'small';
    children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ variant = 'default', children }) => {

    const variantClasses = {
        default: 'text-base m-0 text-nature-800 font-bold',
        small: 'text-sm m-0 text-nature-600 font-light',
    };

    const className = variantClasses[variant];

    return <p className={className}>{children}</p>;
};

export default Text;
