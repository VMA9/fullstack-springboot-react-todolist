import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        // API çağrısı ile kayıt işlemi yapılacak
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username")} placeholder="Kullanıcı Adı" />
            <input {...register("email")} placeholder="Email" />
            <input {...register("password")} type="password" placeholder="Şifre" />
            <button type="submit">Kayıt Ol</button>
        </form>
    );
};

export default Register;