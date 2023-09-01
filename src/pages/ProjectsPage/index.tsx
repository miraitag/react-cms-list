import { Text } from "../../components/Text"
import { Title } from "../../components/Title"
import { Header } from "../../components/shared/Header"

export const ProjectsPage = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto flex justify-center items-center p-10">
                <div className="w-9/12">
                    <Title className="mb-3" title="ProjectsPage" />
                    <Text
                        className="mb-10"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae quis delectus ab commodi totam officiis quos dolores minus consequuntur minima ut, et consectetur, maiores odio necessitatibus illo, eius voluptatibus."
                    />
                </div>
            </main>
        </>
    )
}
