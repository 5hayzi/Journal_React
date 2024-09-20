import facebookLogo from '../../assets/Images/facebook-logo.svg';
import googleLogo from '../../assets/Images/google-logo.svg';
import twitterLogo from '../../assets/Images/twitter-logo.svg';
import Button from '../UI/Button';

export default function Auth() {
  return (
    <div className="flex justify-between items-center w-[40%] sm:w-[70%] mb-6">
            <Button className="bg-gray-200 !w-20 dark:bg-gray-400">
              <img src={googleLogo} title="Google" className="w-7"/>
            </Button>
            <Button className="bg-gray-200 !w-20 dark:bg-gray-400">
              <img src={facebookLogo} title="Facebook" className="w-7"/>
            </Button>
            <Button className="bg-gray-200 !w-20 dark:bg-gray-400">
              <img src={twitterLogo} title="Twitter" className="w-7"/>
            </Button>
          </div>
  )
}
