/* eslint-disable quote-props */
/* eslint-disable camelcase */

module.exports = {
    animation_graph: {
        pose_graph_node_sub_categories: {
            pose_nodes: '姿势结点',
            pose_nodes_blend: '混合',
            pose_nodes_ik: '反向动力学',
            pose_nodes_choose: '选择',
        },
        pose_graph_node_sub_menus: {
            play_or_sample_clip_motion: '动画剪辑',
            play_or_sample_animation_blend_1d: '一维动画混合',
            play_or_sample_animation_blend_2d: '二维动画混合',
        },
    },

    classes: {
        'cc': {
            'animation': {
                'PoseGraphOutputNode': {
                    displayName: '输出姿势',
                },
                'PoseNodeUseStashedPose': {
                    displayName: '使用暂存的姿势',
                    title: '使用暂存的姿势 {stashName}',
                },
                'PoseNodeStateMachine': {
                    displayName: '状态机',
                    inputs: {
                        'emptyStatePose': {
                            displayName: '空状态姿势',
                        },
                    },
                },
                'ClipMotion': {
                    properties: {
                        'clip': {
                            displayName: '剪辑',
                            tooltip: '动画剪辑。',
                        },
                    },
                },
                'MotionSyncInfo': {
                    properties: {
                        'group': {
                            displayName: '组',
                        },
                    },
                },
                'PoseNodePlayMotion': {
                    displayName: '播放动画',
                    title: '播放 {motionName}',
                    properties: {
                        'motion': {
                            displayName: '动作',
                            tooltip: '要播放的动作。',
                        },
                        'syncInfo': {
                            displayName: '同步',
                        },
                    },
                    inputs: {
                        'speedMultiplier': {
                            displayName: '速度乘数',
                        },
                    },
                    createPoseNodeOnAssetDragHandler: {
                        displayName: '播放',
                    },
                },
                'PoseNodeSampleMotion': {
                    displayName: '采样动画',
                    title: '采样 {motionName}',
                    properties: {
                        'motion': {
                            displayName: '动作',
                            tooltip: '要采样的动作。',
                        },
                        'useNormalizedTime': {
                            displayName: '使用标准化时间',
                            tooltip: '是否使用标准化时间，即 [0, 1] 范围的时间。',
                        },
                    },
                    inputs: {
                        'time': {
                            displayName: '时刻',
                        },
                    },
                    createPoseNodeOnAssetDragHandler: {
                        displayName: '采样',
                    },
                },
                'PoseNodeBlendInProportion': {
                    displayName: '按占比混合',
                    inputs: {
                        'poses': {
                            displayName: '姿势 {elementIndex}',
                        },
                        'proportions': {
                            displayName: '姿势 {elementIndex} 占比',
                        },
                    },
                },
                'PoseNodeBlendTwoPoseBase': {
                    inputs: {
                        'pose0': {
                            displayName: '姿势 1',
                        },
                        'pose1': {
                            displayName: '姿势 2',
                        },
                        'ratio': {
                            displayName: '比例',
                        },
                    },
                },
                'PoseNodeBlendTwoPose': {
                    displayName: '混合双姿势',
                    inputs: {
                        __extends__: 'classes.cc.animation.PoseNodeBlendTwoPoseBase.inputs',
                    },
                },
                'PoseNodeFilteringBlend': {
                    displayName: '过滤混合',
                    inputs: {
                        __extends__: 'classes.cc.animation.PoseNodeBlendTwoPoseBase.inputs',
                    },
                },
                'PoseNodeAdditivelyBlend': {
                    displayName: '加性混合',
                    inputs: {
                        'basePose': {
                            displayName: '基础姿势',
                        },
                        'additivePose': {
                            displayName: '累加姿势',
                        },
                    },
                },
                'PoseNodeChoosePoseByBoolean': {
                    displayName: '按布尔选择',
                    inputs: {
                        'truePose': {
                            displayName: '为真时姿势',
                        },
                        'falsePose': {
                            displayName: '为假时姿势',
                        },
                        'trueFadeInDuration': {
                            displayName: '为真时姿势淡入时长',
                        },
                        'falseFadeInDuration': {
                            displayName: '为假时姿势淡入时长',
                        },
                        'choice': {
                            displayName: '选择',
                        },
                    },
                },
                'PoseNodeChoosePoseByIndex': {
                    displayName: '按索引选择',
                    inputs: {
                        poses: {
                            displayName: '姿势 {elementIndex}',
                        },
                        fadeInDurations: {
                            displayName: '姿势 {elementIndex} 淡入时长',
                        },
                        'choice': {
                            displayName: '选择',
                        },
                    },
                },
                'PoseNodeModifyPoseBase': {
                    inputs: {
                        'pose': {
                            displayName: '姿势',
                        },
                    },
                },
                'PoseNodeApplyTransform': {
                    displayName: '应用变换',
                    title: '变换 {nodeName}',
                    properties: {
                        'positionOperation': {
                            displayName: '位置操作',
                            tooltip: '指定应如何处理位置。',
                        },
                        'rotationOperation': {
                            displayName: '旋转操作',
                            tooltip: '指定应如何处理旋转。',
                        },
                        'transformSpace': {
                            displayName: '变换空间',
                            tooltip: '指定位置和旋转的空间。',
                        },
                    },
                    inputs: {
                        __extends__: 'classes.cc.animation.PoseNodeModifyPoseBase.inputs',
                        'position': {
                            displayName: '位置',
                        },
                        'rotation': {
                            displayName: '旋转',
                        },
                        'intensityValue': {
                            displayName: '强度',
                        },
                    },
                },
                'PoseNodeCopyTransform': {
                    displayName: '拷贝变换',
                    title: '拷贝 {sourceNodeName} 的变换至 {targetNodeName}',
                    properties: {
                        'sourceNodeName': {
                            displayName: '源结点',
                            tooltip: '源结点的名称。',
                        },
                        'targetNodeName': {
                            displayName: '目标结点',
                            tooltip: '目标结点的名称。',
                        },
                        'space': {
                            displayName: '空间',
                            tooltip: '拷贝发生的空间。',
                        },
                    },
                    inputs: {
                        __extends__: 'classes.cc.animation.PoseNodeModifyPoseBase.inputs',
                    },
                },
                'PoseNodeSetAuxiliaryCurve': {
                    displayName: '设置辅助曲线',
                    title: '设置辅助曲线 {curveName}',
                    inputs: {
                        __extends__: 'classes.cc.animation.PoseNodeModifyPoseBase.inputs',
                        'curveValue': {
                            displayName: '值',
                        },
                    },
                },
                'PoseNodeTwoBoneIKSolver': {
                    displayName: '双骨骼 IK 结算器',
                    title: '解算双骨骼 IK：{endEffectorBoneName}',
                    properties: {
                        'endEffectorBoneName': {
                            displayName: '终端执行器骨骼',
                            tooltip: '终端执行器骨骼的名称。',
                        },
                        'endEffectorTarget': {
                            displayName: '终端执行器目标',
                            tooltip: '指定终端执行器的目标。',
                        },
                        'poleTarget': {
                            displayName: '极向目标',
                            tooltip: '指定极向的目标，也即中间骨骼的趋向位置。',
                        },
                    },
                    inputs: {
                        __extends__: 'classes.cc.animation.PoseNodeModifyPoseBase.inputs',
                        'endEffectorTargetPosition': {
                            displayName: '终端执行器目标',
                        },
                        'poleTargetPosition': {
                            displayName: '极目标',
                        },
                        'intensityValue': {
                            displayName: '强度',
                        },
                    },
                    'TargetSpecification': {
                        properties: {
                            'type': {
                                displayName: '类型',
                                tooltip: '目标类型。',
                            },
                            'targetPosition': {
                                displayName: '目标位置',
                                tooltip: '目标位置。',
                            },
                            'targetPositionSpace': {
                                displayName: '目标位置空间',
                                tooltip: '目标位置的空间。',
                            },
                            'targetBone': {
                                displayName: '目标骨骼',
                                tooltip: '目标骨骼的名称。',
                            },
                        },
                    },
                },

                'PVNodeGetVariableBase': {
                    displayName: '获取变量',
                    title: '变量 {variableName}',
                },
            },
        },
    },
};
