import ResistanceImg from '../src/assets/img/workouts/resistance.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import FitnessImg from '../src/assets/img/workouts/fitness.png';
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';

export const workouts = {
    icon: CalendarIcn,
    title: 'Training programs',
    programs: [
        {
            image: ResistanceImg,
            name: 'Resistance',
        },
        {
            image: BoxingImg,
            name: 'Boxing',
        },
        {
            image: BodyPumpImg,
            name: 'Body Pump',
        },
        {
            image: YogaImg,
            name: 'Yoga',
        },
        {
            image: FullBodyImg,
            name: 'Full Body',
        },
        {
            image: FitnessImg,
            name: 'Fitness',
        },
        {
            image: BattleRopeImg,
            name: 'Battle Rope',
        },
    ],
};