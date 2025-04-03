'use server';

import { saveWorkspace } from "@/service/workspaceService";
import { revalidateTag } from "next/cache";

export const workSpaceAction = async (prevState, formData) => {
    console.log("Form data", formData);

    try {
        const workspaceName = formData.get('workspaceName');

        if (!workspaceName) {
            return {
                success: false,
                error: 'Workspace name is required'
            };
        }

        const newWorkspace = await saveWorkspace(workspaceName);
        console.log("new workspace : ", newWorkspace);

        revalidateTag("workspace")
        return {
            success: true,
            workspace: newWorkspace,
            message: 'Workspace created successfully'
        };
    } catch (error) {
        console.error('Error creating workspace:', error);
        return {
            success: false,
            error: error.message || 'Failed to create workspace'
        };
    }
};