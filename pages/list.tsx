import Layout from '../components/layout';
import ChoiceBox from '../components/list/choice-box';
import ChoiceTutor from '../components/list/choice-tutor';

export default function List() {
    
    return (<>
    <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                {/* <ChoiceBox /> */}
                <ChoiceTutor />
            </div>
        </section>    
    </Layout>
    </>);
}
