import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch } from 'react-redux'
import {useForm } from 'react-hook-form'
import {Button, Input, Logo} from './index'
import { login as authLogin } from '../store/authSlice'
import authService from '../appwrite/auth'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const login = async(data) => {
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        } 
    }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 py-10'>
        <div className={`mx-auto w-full max-w-lg bg-white rounded-2xl p-10 border border-gray-200 shadow-xl`}>
            <div className='mb-6 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%' />
                </span>
            </div>
            <h2 className='text-center text-3xl font-bold leading-tight text-gray-800'>Sign in to your account</h2>
            <p className="mt-3 text-center text-base text-gray-600">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                    >
                        Sign Up
                    </Link>
            </p>
            { error && <p className='text-red-600 mt-8 text-center bg-red-50 py-2 rounded'>{error}</p>}
            <form onSubmit={handleSubmit(login)} className='mt-8 space-y-6'>
                <div className='space-y-5'>
                    <Input 
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register('email', {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                            }
                        })}
                        className="focus:border-blue-500"
                    />
                    <div className="relative">
                        <Input 
                            label="Password: "
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...register('password', {
                                required: true,
                            })}
                            className="focus:border-blue-500 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </button>
                    </div>
                    <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors duration-200"
                    >
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login