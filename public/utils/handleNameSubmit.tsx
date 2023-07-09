import { useRouter } from "next/router";

const HandleNameSubmit = (name, url) => {
    const router = useRouter();
    router.push(
        {
            pathname: url,
            query: {
            name: name
            },
        },
    )
}

export default HandleNameSubmit; 