import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/home')
        console.log(data);
    }
    const navigate = useNavigate();
    let signInError;
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError || updateError) {
        signInError = <p>{error?.message || gError?.message || updateError.message}</p>
    }
    if (gUser || user) {
        return <p>Signed In User: {gUser.email || user.email}</p>
    }

    return (
        <div>
            <div className="w-96 mx-auto">
                <div className=" flex-col lg:flex-row-reverse">
                    <div className=" flex-shrink-0  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className=' text-center text-2xl  font-semibold'>
                                Sign Up
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'required name'
                                            }
                                        })}
                                        type="text"
                                        placeholder="name"
                                        className="input input-bordered" />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text">{errors.name.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'required email'
                                            },
                                            pattern: {
                                                value: /[A-Za-z]{3}/,
                                                message: 'valid email'
                                            }
                                        })}
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered" />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'required password'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'must be 6 character or longer '
                                            }
                                        })}
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered" />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text">{errors.password.message}</span>}
                                    </label>
                                </div>
                                {signInError}
                                <div className="form-control ">
                                    <button className="btn btn-primary text-white">Sign Up</button>
                                </div>
                            </form>
                            <p>
                                Already have an account? <span className='text-secondary'><Link to='/signin'>Please sign in.</Link></span></p>

                            <div className="form-control ">
                                <div className="divider">OR</div>
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className="btn btn-secondary text-white">Continue with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;