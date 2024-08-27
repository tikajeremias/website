type AvatarProps = {
    variant?: 'default' | 'large' | 'card';
    img: string;
};

const Avatar: React.FC<AvatarProps> = ({ variant = 'default' ,img }) => {
    
    const variantClasses = {
        large: 'rounded-[100%] m-0 w-24 h-24',
        default: 'rounded-[100%] m-0 w-8 h-8',
        card: 'w-full h-auto object-cover rounded-t-lg'
    };
    
    const className = variantClasses[variant];

    return <img src={img} alt="icon" className={className} />;
};

export default Avatar; 