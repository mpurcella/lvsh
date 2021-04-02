import img1 from '../../../images/svg-1.svg';
import img5 from '../../../images/svg-5.svg';
import img7 from '../../../images/svg-7.svg';
import img8 from '../../../images/svg-8.svg';

let homeObjOne = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    heading: 'Exclusive Access',
    subheading: 'Unlimited Transfers with Zero Fees',
    description: 'Get access to our exclusive diamond card that allows for unlimited transactions without any fees',
    buttonText: 'Get Started',
    imgLocation: '',
    imgOrder: 'start',
    src: img1,
    alt: 'Credit Card',
}

let homeObjTwo = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    heading: '100% Secure',
    subheading: 'Stay Protected 24 Hours a Day, 365 Days a Year',
    description: "You're covered no matter where you are. Over 140 locations worldwide to ensure you have access anytime",
    buttonText: 'Learn More',
    imgLocation: '',
    imgOrder: 'start',
    src: img5,
    alt: 'Vault'
};

let homeObjThree = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    heading: 'Easy Setup',
    subheading: 'Fast and Simple Onboarding Process',
    description: "Get your account set up in under 10 minutes. Just add your information and you're ready to begin using your diamond card.",
    buttonText: 'Start Now',
    // imgLocation: 'start',
    imgOrder: '',
    src: img7,
    alt: 'Vault'
};

let homeObjFour = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    heading: 'Data Analytics',
    subheading: 'Every Transaction is Stored in Our Secure Cloud Database',
    description: 'Never worry again about saving reciepts. We store your data so you have access to it whenever you need it.',
    buttonText: 'Sign Up Now',
    // imgLocation: 'start',
    imgOrder: '',
    src: img8,
    alt: 'Vault'
};

export { homeObjOne, homeObjTwo, homeObjThree, homeObjFour };