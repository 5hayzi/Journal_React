

export default function TwoFactorAuthentication() {

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('otp-form')
        const inputs = [...form.querySelectorAll('input[type=text]')]
        const submit = form.querySelector('button[type=submit]')

        const handleKeyDown = (e) => {
            if (
                !/^[0-9]{1}$/.test(e.key)
                && e.key !== 'Backspace'
                && e.key !== 'Delete'
                && e.key !== 'Tab'
                && !e.metaKey
            ) {
                e.preventDefault()
            }

            if (e.key === 'Delete' || e.key === 'Backspace') {
                const index = inputs.indexOf(e.target);
                if (index > 0) {
                    inputs[index - 1].value = '';
                    inputs[index - 1].focus();
                }
            }
        }

        const handleInput = (e) => {
            const { target } = e
            const index = inputs.indexOf(target)
            if (target.value) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus()
                } else {
                    submit.focus()
                }
            }
        }

        const handleFocus = (e) => {
            e.target.select()
        }

        const handlePaste = (e) => {
            e.preventDefault()
            const text = e.clipboardData.getData('text')
            if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
                return
            }
            const digits = text.split('')
            inputs.forEach((input, index) => input.value = digits[index])
            submit.focus()
        }

        inputs.forEach((input) => {
            input.addEventListener('input', handleInput)
            input.addEventListener('keydown', handleKeyDown)
            input.addEventListener('focus', handleFocus)
            input.addEventListener('paste', handlePaste)
        })
    })                       
  return (
    <div className="max-w-md mx-auto text-center px-4 sm:px-8 py-10">
    <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1 dark:text-white">Email Verification</h1>
        <p className="text-[15px] text-slate-500 dark:text-slate-400">Enter the 6-digit verification code that was sent to your email.</p>
    </header>
    <form id="otp-form">
        <div className="flex items-center justify-center gap-3">
            <input
                type="text"
                className="w-10 h-10 text-center text-2xl  text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxLength="1" />
                <input
                type="text"
                className="w-10 h-10 text-center text-2xl  text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxLength="1" />
                <input
                type="text"
                className="w-10 h-10 text-center text-2xl  text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxLength="1" />
                <hr className="w-1 border-black" />
                <input
                type="text"
                className="w-10 h-10 text-center text-2xl  text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxLength="1" />
                <input
                type="text"
                className="w-10 h-10 text-center text-2xl  text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxLength="1" />
                <input
                type="text"
                className="w-10 h-10 text-center text-2xl  text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxLength="1" />
                
            
        </div>
        <div className="max-w-[260px] mx-auto mt-4">
            <button type="submit"
                className="w-full inline-flex justify-center whitespace-nowrap rounded bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Verify
                Account</button>
        </div>
    </form>
    <div className="text-sm text-slate-500 mt-4 dark:text-slate-400">Didn`t receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div>
</div>

  );
}
