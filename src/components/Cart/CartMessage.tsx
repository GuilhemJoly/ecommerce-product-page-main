import { CartMessageProps } from "../../../typescript/types";

export const CartMessage: React.FC<CartMessageProps> = ({ cartMessageClass, messageClass, message }) => {
    return (
        <div className={cartMessageClass}>
            <span className={messageClass}>{message}</span>
        </div>
    );
}