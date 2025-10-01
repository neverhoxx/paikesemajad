import { Container } from '@/components/shared/container';
import Image from 'next/image';
import { getProducts } from '@/data/projects';
import type { Product } from '@/data/projects';
import { useTranslations } from 'next-intl';

interface Props {
    params: { id: string };
}

export default function ProductDetails({ params }: Props) {
    const t = useTranslations('Main-main');

    const products: Product[] = getProducts();
    const product = products.find(p => String(p.id) === params.id);

    if (!product) return <div>{t('productNotFound')}</div>;

    return (
        <Container>
            <h1>{product.name}</h1>
            <div>
                <Image src={product.main_image} alt={product.name} width={600} height={400} />
            </div>
        </Container>
    );
}
