/**
 * Copyright (c) 2020 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ScrollArea, View } from "@nodegui/react-nodegui"
import React from "react"
import { ViewProps, WidgetEventListeners } from "@nodegui/react-nodegui/dist/components/View/RNView"

import { ProposalTable } from "../../../proposals/comp/proposal-table/proposal-table"
import { winSize } from "../../../config"
import { CountryFilter } from "../../../proposals/comp/country-filter"
import { SelectedProposal } from "../../../proposals/comp/selected-proposal"
import { OriginalLocation } from "../../../location/comp/original-location"
import { NavBar } from "../../../navbar"

export const SelectProposalView: React.FC<ViewProps<WidgetEventListeners>> = ({ style = "", ...rest }) => {
    return (
        <View
            style={`
                ${style}
                flex-direction: "column";
            `}
            {...rest}
        >
            <NavBar />
            <View
                style={`
                width: ${winSize.width};
                height: ${winSize.height - 40};
                flex-direction: "row";
            `}
            >
                <View
                    style={`
                    width: 240;
                    flex-direction: "column";
                `}
                >
                    <ScrollArea
                        style={`
                        flex: 1;
                        background-color: #ecf0f1;
                        border: 0;
                        border-right: 1px solid #e9e9e9;
                    `}
                    >
                        <View
                            style={`
                            padding-bottom: 15;
                            background: #fafafa;
                        `}
                        >
                            <CountryFilter />
                        </View>
                    </ScrollArea>
                    <View
                        style={`
                        height: 65;
                        background: #fafafa;
                        border-top: 1px solid #e9e9e9;
                        border-right: 1px solid #e9e9e9;
                    `}
                    >
                        <OriginalLocation />
                    </View>
                </View>
                <View
                    style={`
                    width: ${winSize.width - 240};
                    flex-direction: "column";
                    background: #fff;
                `}
                >
                    <ProposalTable />
                    <View
                        style={`
                        max-height: 65;
                        border-top: 1px solid #e9e9e9;
                    `}
                    >
                        <SelectedProposal />
                    </View>
                </View>
            </View>
        </View>
    )
}
