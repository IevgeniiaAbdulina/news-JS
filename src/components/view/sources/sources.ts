import './sources.css';

export type SourceData = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

class Sources {
    // eslint-disable-next-line class-methods-use-this
    draw(data: Array<SourceData>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item: SourceData) => {
            // @ts-expect-error TS(2531): Object is possibly 'null'.
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        // @ts-expect-error TS(2531): Object is possibly 'null'.
        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
