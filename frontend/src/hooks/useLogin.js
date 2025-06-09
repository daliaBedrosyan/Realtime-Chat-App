import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async ({ username, password }) => {

        const sucess = handleInputErrors({ username, password });
        if (!sucess) return;

        setLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Login failed");
            }

            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);

            toast.success("Login successful!");

        } catch (error) {
            toast.error(error.message || "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return { login, loading };

}

export default useLogin;


const handleInputErrors = ({ username, password }) => {
    if (!username || !password) {
        toast.error('Please fill all the fields');
        return false;
    };

    return true;
}