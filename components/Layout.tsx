import { Layout } from 'antd';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

function MyLayout({ children }) {
    return (
        <Layout>
            <Header>header</Header>
            <Content>{ children }</Content>
            <Footer>
                hell
            </Footer>
        </Layout>
    )
}

export default MyLayout;
