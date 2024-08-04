import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        // API çağrısı ile giriş işlemi yapılacak
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username")} placeholder="Kullanıcı Adı" />
            <input {...register("password")} type="password" placeholder="Şifre" />
            <button type="submit">Giriş Yap</button>
        </form>
    );
};

export default Login;