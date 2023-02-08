/* eslint-disable import/no-unresolved */
import './sources.css';
import { SourceList, Sources as SourceModel } from 'src/components/models/Source';

export default class Sources {
    draw = (sources: SourceList) => {
        const fragment = this.createFragment(sources);
        this.renderSources(fragment);
    };

    private createFragment(sources: SourceList): DocumentFragment {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp) {
            sources.forEach((item: SourceModel) => {
                const sourceClone = this.createSourceClone(sourceItemTemp, item);

                fragment.append(sourceClone);
            });
        }
        return fragment;
    }

    private createSourceClone = (sourceItem: Element, item: SourceModel): DocumentFragment => {
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        const sourceClone = sourceItem.content.cloneNode(true);

        sourceClone.querySelector('.source__item-name').textContent = item.name;
        sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

        return sourceClone;
    };

    private renderSources = (fragment: DocumentFragment) => {
        const sourcesList = document.querySelector('.sources');
        if (sourcesList) {
            sourcesList.append(fragment);
        }
    };
}
